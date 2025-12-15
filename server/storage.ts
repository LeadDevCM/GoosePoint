import { 
  products, 
  recipes, 
  blogPosts,
  newsletterSubscribers,
  type Product, 
  type InsertProduct,
  type Recipe,
  type InsertRecipe,
  type BlogPost,
  type InsertBlogPost,
  type NewsletterSubscriber,
  type InsertNewsletterSubscriber
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Products
  getAllProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Recipes
  getAllRecipes(): Promise<Recipe[]>;
  getRecipe(id: string): Promise<Recipe | undefined>;
  createRecipe(recipe: InsertRecipe): Promise<Recipe>;
  
  // Blog Posts
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  // Newsletter
  subscribeNewsletter(email: string): Promise<NewsletterSubscriber>;
}

export class DatabaseStorage implements IStorage {
  // Products
  async getAllProducts(): Promise<Product[]> {
    if (!db) return [];
    return await db.select().from(products);
  }

  async getProduct(id: string): Promise<Product | undefined> {
    if (!db) return undefined;
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product || undefined;
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    if (!db) throw new Error("Database not available");
    const [product] = await db
      .insert(products)
      .values(insertProduct)
      .returning();
    return product;
  }

  // Recipes
  async getAllRecipes(): Promise<Recipe[]> {
    if (!db) return [];
    return await db.select().from(recipes);
  }

  async getRecipe(id: string): Promise<Recipe | undefined> {
    if (!db) return undefined;
    const [recipe] = await db.select().from(recipes).where(eq(recipes.id, id));
    return recipe || undefined;
  }

  async createRecipe(insertRecipe: InsertRecipe): Promise<Recipe> {
    if (!db) throw new Error("Database not available");
    const [recipe] = await db
      .insert(recipes)
      .values(insertRecipe)
      .returning();
    return recipe;
  }

  // Blog Posts
  async getAllBlogPosts(): Promise<BlogPost[]> {
    if (!db) return [];
    return await db.select().from(blogPosts);
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    if (!db) return undefined;
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return post || undefined;
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    if (!db) throw new Error("Database not available");
    const [post] = await db
      .insert(blogPosts)
      .values(insertPost)
      .returning();
    return post;
  }

  // Newsletter
  async subscribeNewsletter(email: string): Promise<NewsletterSubscriber> {
    if (!db) throw new Error("Database not available");
    const [subscriber] = await db
      .insert(newsletterSubscribers)
      .values({ email })
      .returning();
    return subscriber;
  }
}

export const storage = new DatabaseStorage();
