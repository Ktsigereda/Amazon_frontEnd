
import {categoryInfos} from "./CategoryFullinfos"
import CategoryCard from './CategoryCard'
import classes from "./Category.module.css"

const Category = () => {
  return (
    <section className={classes.category_container}>
{
    categoryInfos.map((infos, i) => {
        return <CategoryCard key ={i} data ={infos}/>;
    })
}
    </section>
  )
}

export default Category