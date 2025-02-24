function match(input: string): string | null {
    if (!input) return null;

    let r = /(?:dailymotion\.com\/video\/|dai\.ly\/)([A-Za-z0-9_-]{7})|^([A-Za-z0-9_-]{7})$/;
    let m = input.match(r);

    return m ? m[1] || m[2] : null;
}

export { match };