import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ProductModel, ProductSnapshot } from "../product/product"
import { withEnvironment } from "../extensions/with-environment"

/**
 * Example store containing Rick and Morty products
 */
export const ProductStoreModel = types
  .model("ProductStore")
  .props({
    products: types.optional(types.array(ProductModel), []),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    setProducts: (products) => self.products = products,
    find: (id) => self.products.find(p => p.barcode === id)
  }))

type ProductStoreType = Instance<typeof ProductStoreModel>
export interface ProductStore extends ProductStoreType {}
type ProductStoreSnapshotType = SnapshotOut<typeof ProductStoreModel>
export interface ProductStoreSnapshot extends ProductStoreSnapshotType {}
export const createProductStoreDefaultModel = () => types.optional(ProductStoreModel, {})
