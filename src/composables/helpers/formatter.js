
export const formatter = () => {
    const formatCurrency = (value) => {
        return new Intl.NumberFormat("es-CO", {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(value);
    }
    const formatDate = (date) => {
        const newDate = new Date(date)
        const currentDate = newDate.setDate(newDate.getDate() + 1);
        return new Intl.DateTimeFormat("es-CO", {
            dateStyle: "long",
        }).format(currentDate);
    }

    const currentDay = new Intl.DateTimeFormat("fr-CA", { year: "numeric", month: "2-digit", day: "2-digit" }).format(Date.now())

    return {
        formatCurrency,
        formatDate,
        currentDay
    }
}
