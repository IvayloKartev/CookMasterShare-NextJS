import Header from "./Header";
import RecipeAssembler from "./RecipeAssembler";
import '../css/slider.css';
import HomeSlider from "./HomeSlider";

export default function Home({type, btnEvent, recipes, likeRec}){
    return(
        <>
            <Header/>
            <HomeSlider/>
        </>
    )
}