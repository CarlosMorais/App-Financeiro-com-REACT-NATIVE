import {
    baby_car,
    cloth_icon,
    education,
    food,
    healthcare,
    sports_icon,
} from './icons';
import { COLORS } from "./theme";
const confirmStatus = "C"
const pendingStatus = "P"

export const categories = [
    {
        id: 1,
        name: "Educação",
        icon: education,
        color: COLORS.darkgreen,
        expenses: [
            {
                id: 1,
                title: "Mensalidade",
                description: "Mensalidade",
                location: "Avenida Paulista' tuition center",
                total: 100.00,
                status: pendingStatus
            },
            {
                id: 2,
                title: "Arduino",
                description: "Hardward",
                location: "Avenida Paulista' tuition center",
                total: 30.00,
                status: pendingStatus
            },
            {
                id: 3,
                title: "Livros de Javascript",
                description: "Livros de Javascript",
                location: "Avenida Paulista' Book Store",
                total: 20.00,
                status: confirmStatus
            },
            {
                id: 4,
                title: "Livros de PHP",
                description: "Livros de PHP",
                location: "Avenida Paulista' Book Store",
                total: 20.00,
                status: confirmStatus
            }
        ],
    },
    {
        id: 2,
        name: "Nutrição",
        icon: food,
        color: COLORS.lightBlue,
        expenses: [
            {
                id: 5,
                title: "Vitaminas",
                description: "Vitamina",
                location: "Avenida Paulista' Pharmacy",
                total: 25.00,
                status: pendingStatus,
            },

            {
                id: 6,
                title: "Proteína em pó",
                description: "Proteína",
                location: "Avenida Paulista' Pharmacy",
                total: 50.00,
                status: confirmStatus,
            },

        ],
    },
    {
        id: 3,
        name: "Filhos",
        icon: baby_car,
        color: COLORS.yellow,
        expenses: [
            {
                id: 7,
                title: "Brinquedos",
                description: "Brinquedo",
                location: "Avenida Paulista' Toy Store",
                total: 25.00,
                status: confirmStatus,
            },
            {
                id: 8,
                title: "Baby Car Seat",
                description: "Baby Car Seat",
                location: "Avenida Paulista' Baby Care Store",
                total: 100.00,
                status: pendingStatus,
            },
            {
                id: 9,
                title: "Pampers",
                description: "Pampers",
                location: "Avenida Paulista' Supermarket",
                total: 100.00,
                status: pendingStatus,
            },
            {
                id: 10,
                title: "Camiseta de bebê",
                description: "T-Shirt",
                location: "Avenida Paulista' Fashion Store",
                total: 20.00,
                status: pendingStatus,
            },
        ],
    },
    {
        id: 4,
        name: "Bem Estar",
        icon: healthcare,
        color: COLORS.peach,
        expenses: [
            {
                id: 11,
                title: "Skin Care",
                description: "Skin care",
                location: "Avenida Paulista' Pharmacy",
                total: 10.00,
                status: pendingStatus,
            },
            {
                id: 12,
                title: "Loção",
                description: "Loção",
                location: "Avenida Paulista' Pharmacy",
                total: 50.00,
                status: confirmStatus,
            },
            {
                id: 13,
                title: "Máscara falsa",
                description: "Máscara falsa",
                location: "Avenida Paulista' Pharmacy",
                total: 50.00,
                status: pendingStatus,
            },
            {
                id: 14,
                title: "Creme protetor solar",
                description: "Creme protetor solar",
                location: "Avenida Paulista' Pharmacy",
                total: 50.00,
                status: pendingStatus,
            },
        ],
    },
    {
        id: 5,
        name: "Esportes",
        icon: sports_icon,
        color: COLORS.purple,
        expenses: [
            {
                id: 15,
                title: "Associação de ginásio",
                description: "Taxa mensal",
                location: "Avenida Paulista' Gym",
                total: 45.00,
                status: pendingStatus,
            },
            {
                id: 16,
                title: "Luvas",
                description: "Equipamento de ginástica",
                location: "Avenida Paulista' Gym",
                total: 15.00,
                status: confirmStatus,
            },
        ],
    },
    {
        id: 6,
        name: "Roupas",
        icon: cloth_icon,
        color: COLORS.red,
        expenses: [
            {
                id: 17,
                title: "Camiseta",
                description: "Camiseta de cor lisa",
                location: "Avenida Paulista' Mall",
                total: 20.00,
                status: pendingStatus,
            },
            {
                id: 18,
                title: "Jeans",
                description: "Jeans azul",
                location: "Avenida Paulista' Mall",
                total: 50.00,
                status: confirmStatus,
            },
        ],
    }
]

export default {
    categories
}