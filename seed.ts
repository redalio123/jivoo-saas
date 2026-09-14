import { PrismaClient, UserRole } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const tenant = await prisma.tenant.upsert({
    where: { id: "demo-tenant" },
    update: {},
    create: { id: "demo-tenant", name: "Jivoo Demo Business" }
  });
  const outlet = await prisma.outlet.create({ data: { tenantId: tenant.id, name: "Outlet Pusat", address: "Indonesia" } });
  const cat1 = await prisma.category.create({ data: { tenantId: tenant.id, name: "Minuman" } });
  const cat2 = await prisma.category.create({ data: { tenantId: tenant.id, name: "Makanan" } });

  const products = [
    ["P001","Kopi Susu",18000,9000,48,cat1.id],
    ["P002","Matcha Latte",22000,11000,35,cat1.id],
    ["P003","Americano",16000,7000,52,cat1.id],
    ["P004","Croissant",19000,9000,24,cat2.id],
    ["P005","Nasi Ayam",28000,15000,18,cat2.id]
  ];
  for (const [sku,name,price,cost,stock,categoryId] of products) {
    const p = await prisma.product.create({ data: {
      tenantId: tenant.id, sku: String(sku), name: String(name),
      price: Number(price), cost: Number(cost), stock: Number(stock), minStock: 5,
      categoryId: String(categoryId)
    }});
    await prisma.inventory.create({ data: { outletId: outlet.id, productId: p.id, quantity: Number(stock) }});
  }

  await prisma.user.create({
    data: { tenantId: tenant.id, name: "Owner Jivoo", email: "owner@jivoo.local", pin: "1234", role: UserRole.OWNER }
  });
  console.log("Seed selesai. Demo PIN: 1234");
}
main().finally(() => prisma.$disconnect());
