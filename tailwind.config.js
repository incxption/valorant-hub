const colors = require("tailwindcss/colors")

module.exports = {
    darkMode: "class",
    theme: {
        extend: {
            scale: {
                102: "1.02"
            },
            colors: {
                gray: colors.gray,
                orange: colors.orange
            }
        }
    },
    variants: {
        extend: {
            ringWidth: ["hover"]
        }
    },
    plugins: []
}
