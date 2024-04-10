import { IconName } from "../../../../../design-system";

export type FeatureCardProps = {
    iconName: IconName;
    title: string;
    description: string;
    cardBackgroundColor: string;
    iconWrapperBackgroundColor: string;
    iconWrapperBorderColor: string;
};

export const features: FeatureCardProps[] = [
    {
        title: "Simple Project Management",
        description:
            "Seamlessly manage every aspect of your projects from ideation to execution. Projectify brings everything you need under one virtual roof.",
        iconName: "management",
        cardBackgroundColor: "var(--green-25)",
        iconWrapperBackgroundColor: "var(--green-50)",
        iconWrapperBorderColor: "var(--green-100)"
    },
    {
        title: "Effortless Collaboration",
        description:
            "Break down silos and enhance team collaboration with our intuitive features. Ensure your team stays connected and projects stay on track.",
        iconName: "collaboration",
        cardBackgroundColor: "var(--sunglow-25)",
        iconWrapperBackgroundColor: "var(--sunglow-50)",
        iconWrapperBorderColor: "var(--sunglow-100)"
    },
    {
        title: "User-Friendly Interface",
        description:
            "Embrace a sleek, user-friendly design that prioritizes a seamless user experience. Focus on what truly matters - your projects!",
        iconName: "ui",
        cardBackgroundColor: "var(--primary-25)",
        iconWrapperBackgroundColor: "var(--primary-50)",
        iconWrapperBorderColor: "var(--primary-100)"
    },
    {
        title: "Flexible Workflows",
        description:
            "Tailor Projectify to your unique needs. Our customizable workflows adapt to your project's specific requirements, giving the flexibility to success.",
        iconName: "workflow",
        cardBackgroundColor: "var(--red-orange-25)",
        iconWrapperBackgroundColor: "var(--red-orange-50)",
        iconWrapperBorderColor: "var(--red-orange-100)"
    },
    {
        title: "Insightful Analytics",
        description:
            "Harness the power of data with our comprehensive analytics suite. Gain valuable insights into project performance for informed decisions.",
        iconName: "analytics",
        cardBackgroundColor: "var(--dodger-blue-25)",
        iconWrapperBackgroundColor: "var(--dodger-blue-50)",
        iconWrapperBorderColor: "var(--dodger-blue-100)"
    },
    {
        title: "Automated Task Reminders",
        description:
            "Never miss a deadline again! Projectify's automated task reminders keep your team on track, ensuring that crucial milestones are met.",
        iconName: "reminders",
        cardBackgroundColor: "var(--purple-25)",
        iconWrapperBackgroundColor: "var(--purple-50)",
        iconWrapperBorderColor: "var(--purple-100)"
    }
];
