import { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import { api } from "@/services/api";



export default function Home() {

    const [categories, setCategories] = useState()

    async function fetchCategories() {
        try {
            const { data } = await api.get("/categories")
            console.log(data)

        } catch (error) {
            console.log(error)
            Alert.alert("Categorias", "Não foi possivel carregar as categorias.")
        }
    }

    useEffect(() => {
        fetchCategories()
    },[])

    return(
        <View style={{flex: 1}}>
           
        </View>
    )
}