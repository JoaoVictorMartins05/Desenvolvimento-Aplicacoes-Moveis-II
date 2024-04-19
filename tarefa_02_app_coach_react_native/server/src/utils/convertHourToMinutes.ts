export default function convertHourToMinutes(time: string): number{
    // Divide a string em duas partes usando ":"
    const [hours, minutes] = time.split(":").map(Number);

    // Calcula os minutos total
    const totalMinutes = hours * 60 + minutes;

    return totalMinutes;
}