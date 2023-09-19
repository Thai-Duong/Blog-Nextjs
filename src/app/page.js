import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className="wrapper">
      <Featured />
      <CategoryList />
      <div className="gap-5 lg:mt-10 xl:grid xl:grid-cols-12">
        <div className="xl:col-span-9">
          <CardList page={page} />
        </div>
        <div className="lg:col-span-3">
          <Menu />
        </div>
      </div>
    </div>
  );
}
