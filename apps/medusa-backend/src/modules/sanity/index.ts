type SanityModuleOptions = {
  projectId?: string;
  token?: string;
};

export default class SanityModuleService {
  protected options: SanityModuleOptions;

  constructor(_container: unknown, options: SanityModuleOptions = {}) {
    this.options = options;
  }

  async syncProduct(product: { id: string; title?: string }) {
    return {
      synced: Boolean(this.options.projectId && this.options.token),
      productId: product.id,
      title: product.title,
    };
  }
}
