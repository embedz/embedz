function match(input: string): string | null {
    if (!input) return null;

    let r = /(?:vimeo\.com\/(\d+))|^(\d+)$/;
    let m = input.match(r);

    return m ? m[1] || m[2] : null;
}

export { match };