import jason from "../../../../assets/images/testimonials/jason.png";
import kevin from "../../../../assets/images/testimonials/kevin.png";
import emily from "../../../../assets/images/testimonials/emily.png";

export const testimonials = [
    {
        id: 1,
        image: jason,
        name: "Jason Herzog",
        title: "Project Manager at Google",
        rating: Array(5).fill(null),
        description:
            "Projectify App is a game-changer for project management. Its user-friendly interface and intuitive features make handling multiple projects a breeze."
    },
    {
        id: 2,
        image: kevin,
        name: "Kevin Park",
        title: "Senior Software Engineer at Microsoft",
        rating: Array(5).fill(null),
        description:
            "I rely on Projectify App to streamline our development process. Its robust tools and seamless integration with our existing systems have significantly increased our team's productivity."
    },
    {
        id: 3,
        image: emily,
        name: "Emily Chen",
        title: "Marketing Director at Amazon",
        rating: Array(4).fill(null),
        description:
            "Projectify App has become my go-to tool for orchestrating complex campaigns with ease. Its comprehensive features and real-time collaboration capabilities have revolutionized how our team operates."
    }
];
