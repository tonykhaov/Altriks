import { build, fake, sequence } from "@jackfranklin/test-data-bot";

const itemBuilder = build("Item", {
  fields: {
    title: fake((f) => f.commerce.product()),
    price: fake((f) => f.commerce.price(1, 999, 0)),
    thumbnail_url: fake((f) => f.image.imageUrl()),
    index: sequence((s) => `product${s}`),
  },
});

export { itemBuilder };
