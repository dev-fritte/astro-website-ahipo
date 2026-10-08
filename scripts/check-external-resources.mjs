// Fails if the built site (dist/) loads anything from a third-party host.
// Plain links (<a href>) and canonical/alternate <link> tags are fine, they load nothing.
import {readdirSync, readFileSync, statSync} from 'node:fs';
import {join} from 'node:path';

const DIST = process.argv[2] ?? 'dist';
const OWN_HOST = 'ahipo.de';

const walk = (dir) => readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
});

const isExternal = (url) => {
    try {
        const {protocol, hostname} = new URL(url, 'https://' + OWN_HOST);
        return /^https?:$/.test(protocol) && hostname !== OWN_HOST && hostname !== 'www.' + OWN_HOST;
    } catch {
        return false;
    }
};

const findings = [];
for (const file of walk(DIST)) {
    const text = readFileSync(file, 'utf8');

    if (file.endsWith('.html')) {
        // elements that load resources
        for (const [tag] of text.matchAll(/<(script|img|source|iframe|video|audio|embed|object|link)\b[^>]*>/gi)) {
            if (/^<link\b/i.test(tag) && /rel="(canonical|alternate|sitemap)"/i.test(tag)) continue;
            for (const [, , url] of tag.matchAll(/\b(src|href|srcset|data)="([^"]+)"/gi)) {
                if (isExternal(url.split(/\s+/)[0])) findings.push(`${file}: ${tag.slice(0, 80)} -> ${url}`);
            }
        }
    }

    if (/\.(css|js|html|svg)$/.test(file)) {
        for (const [, url] of text.matchAll(/(?:@import\s+(?:url\()?|url\()\s*['"]?(https?:\/\/[^'")\s]+)/gi)) {
            if (isExternal(url)) findings.push(`${file}: CSS reference -> ${url}`);
        }
    }
}

if (findings.length > 0) {
    console.error(`External resources found in ${DIST}/:`);
    findings.forEach((f) => console.error('  ' + f));
    process.exit(1);
}
console.log(`OK: ${DIST}/ loads no external resources.`);
