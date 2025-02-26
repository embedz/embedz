function match(input: string): string | null {
    if (!input) return null;

    let r = /(?:youtu\.be\/|(?:music\.)?youtube\.com\/(?:shorts\/|embed\/|.*[?&]v=))([A-Za-z0-9_-]{11})|^([A-Za-z0-9_-]{11})$/;
    let m = input.match(r);

    return m ? m[1] || m[2] : null;
}

export { match };