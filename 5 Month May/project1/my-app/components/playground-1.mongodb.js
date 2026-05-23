use ("ecommerace")

// Text index for search
db.articles.createIndex({ title: "text", content: "text" });