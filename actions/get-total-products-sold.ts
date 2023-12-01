import prismadb from "@/lib/prismadb";

export const getTotalProductsSold = async (storeId: string) => {
  const stockCount = await prismadb.orderItem.count();

  return stockCount;
};