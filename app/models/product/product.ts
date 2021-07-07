import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Rick and Morty product model.
 */
export const ProductModel = types.model("Product").props({
  barcode: types.identifierNumber,
  location: types.maybe(types.string),
  description: types.maybe(types.string),
  count: types.maybe(types.integer),
  price: types.maybe(types.string),
})

type ProductType = Instance<typeof ProductModel>
export interface Product extends ProductType {}
type ProductSnapshotType = SnapshotOut<typeof ProductModel>
export interface ProductSnapshot extends ProductSnapshotType {}
export const createProductDefaultModel = () => types.optional(ProductModel, {})
