import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, decimal, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: varchar("id").primaryKey(),
  title: text("title").notNull(),
  price: text("price").notNull(),
  description: text("description").notNull(),
  fullDescription: text("full_description").notNull(),
  images: jsonb("images").notNull().$type<string[]>(),
  category: text("category").notNull(),
  options: jsonb("options").notNull().$type<Array<{ name: string; values: string[] }>>(),
});

export const recipes = pgTable("recipes", {
  id: varchar("id").primaryKey(),
  title: text("title").notNull(),
  image: text("image").notNull(),
  time: text("time").notNull(),
  servings: text("servings").notNull(),
  difficulty: text("difficulty").notNull(),
  description: text("description").notNull(),
  ingredients: jsonb("ingredients").notNull().$type<string[]>(),
  instructions: jsonb("instructions").notNull().$type<string[]>(),
});

export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  fullContent: text("full_content").notNull(),
  date: text("date").notNull(),
  author: text("author").notNull(),
  image: text("image").notNull(),
  category: text("category").notNull(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  subscribedAt: text("subscribed_at").notNull().default(sql`NOW()::text`),
});

// Insert schemas
export const insertProductSchema = createInsertSchema(products);
export const insertRecipeSchema = createInsertSchema(recipes);
export const insertBlogPostSchema = createInsertSchema(blogPosts);
export const insertNewsletterSubscriberSchema = createInsertSchema(newsletterSubscribers).omit({ id: true, subscribedAt: true });

// Types
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export type InsertRecipe = z.infer<typeof insertRecipeSchema>;
export type Recipe = typeof recipes.$inferSelect;

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

export type InsertNewsletterSubscriber = z.infer<typeof insertNewsletterSubscriberSchema>;
export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect;
