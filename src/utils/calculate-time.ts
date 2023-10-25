export function calculateTime(start: number): string{
    return `${(Date.now() - start)}ms`;
}