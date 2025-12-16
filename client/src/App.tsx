import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/layout";
import Home from "@/pages/home";
import Shop from "@/pages/shop";
import ShopProducts from "@/pages/shop-products";
import TheOystery from "@/pages/the-oystery";
import ProductDetail from "@/pages/product-detail";
import Story from "@/pages/story";
import Recipes from "@/pages/recipes";
import RecipeDetail from "@/pages/recipe-detail";
import Wholesale from "@/pages/wholesale";
import Blog from "@/pages/blog";
import BlogDetail from "@/pages/blog-detail";
import Cart from "@/pages/cart";
import Shipping from "@/pages/shipping";
import Connect from "@/pages/connect";
import NotFound from "@/pages/not-found";
import Educate from "@/pages/educate";
import EducateBlog from "@/pages/educate-blog";
import EducateRecipes from "@/pages/educate-recipes";
import EducateVideos from "@/pages/educate-videos";
import EducateMedia from "@/pages/educate-media";
import HawaiianShellfish from "@/pages/hawaiian-shellfish";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/shop/products" component={ShopProducts} />
        <Route path="/the-oystery" component={TheOystery} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/story" component={Story} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/recipes/:id" component={RecipeDetail} />
        <Route path="/wholesale" component={Wholesale} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogDetail} />
        <Route path="/shipping" component={Shipping} />
        <Route path="/educate" component={Educate} />
        <Route path="/educate/blog" component={EducateBlog} />
        <Route path="/educate/recipes" component={EducateRecipes} />
        <Route path="/educate/videos" component={EducateVideos} />
        <Route path="/educate/media" component={EducateMedia} />
        <Route path="/connect" component={Connect} />
        <Route path="/hawaiian-shellfish" component={HawaiianShellfish} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
