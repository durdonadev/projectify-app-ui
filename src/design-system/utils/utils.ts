export const trimWhiteSpaces = (str: string) => {
    return str
        .split(" ")
        .filter((item) => item !== "")
        .join(" ");
};

export const getNameInitials = (name: string): string => {
    const words = name.split(" ");
    const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
    return initials;
};

// export const getFullNameInitials = (name: string): string => {
//     const firstInitial = user.firstName.charAt(0);
//     const lastInitial = user.lastName.charAt(0);

//     return `${firstInitial}${lastInitial}`;
// };

// {
//     firstName: "Durdona",
//     lastName: "Shuxratovna",
//     email: "durdona@gmail.com",
//     position: "PM"
// }
