import { Home } from "lucide-react";

export type PageType = "home" | "Reastaurant" | "table" | "spa" | "fitness" | "diving" | "buggy" | "additional" | "contact";

export interface PageContent {
    title: string
    imagePath: string
}

export const pageData: Record<PageType, PageContent> = {
    home: {
      title: "Home Page Design",
      imagePath: "/images/GuestiefyHomePage.jpg",
    },
    Reastaurant: {
      title: "Reastaurant Booking Page Design",
      imagePath: "/images/Restaurant_Booking_Page.jpg",
    },
    table: {
      title: "Table Booking Page Design",
      imagePath: "/images/Table_Booking_Page.jpg",
    },
    spa: {
      title: "Spa Page Design",
      imagePath: "/images/Spa_Page.jpg",
    },
    fitness: {
      title: "Contact Page Design",
      imagePath: "/images/Fitness_Page.jpg",
    },
    diving: {
      title: "Diving Page Design",
        imagePath: "/images/Diving_Page.jpg",
    },
    buggy: {
      title: "Buggy Booking Page Design",
      imagePath: "/images/Buggy_Booking_Page.jpg",
    },
    contact: {
      title: "Contact Page Design",
      imagePath: "/images/Contact_Us_Page.jpg",
    },
    additional: {
      title: "Additional Services Page Design",
      imagePath: "/images/Additional_Services_Page.jpg",
    },
}

export const navItems = [
    { key: "home" as PageType, label: "Home", icon: Home },
    // { key: "Reastaurant" as PageType, label: "Reastaurant", icon: Hotel },
    // { key: "table" as PageType, label: "Table", icon: Table },
    // { key: "spa" as PageType, label: "Spa", icon: Bed },
    // { key: "fitness" as PageType, label: "Fitness", icon: Dumbbell },
    // { key: "diving" as PageType, label: "Diving", icon: RectangleGogglesIcon },
    // { key: "buggy" as PageType, label: "Buggy", icon: Briefcase },
    // { key: "additional" as PageType, label: "Additional", icon: PlusIcon },
    // { key: "contact" as PageType, label: "Contact", icon: Mail },
];
  