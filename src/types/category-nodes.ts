import { Links } from './generic';

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace CategoryNodesResponse {
  export interface CategoryNode {
    id?: string | null;
    nodeId: number;
    name: string;
    metaTitle?: string | null;
    metaKeywords?: string | null;
    metaDescription?: string | null;
    isActive: boolean;
    order: number | null;
    url: string;
    children: Array<CategoryNode>;
    parents?: Array<CategoryNode>;
  }

  export interface Data {
    type: string;
    id: string;
    attributes: CategoryNode;
    links: Links;
  }

  export interface RootObject {
    data: Data;
  }
}

export class CategoryNodeHelper {
  private static flatArrays(
    items: Array<CategoryNodesResponse.CategoryNode>,
  ): Array<CategoryNodesResponse.CategoryNode> {
    let parents: Array<CategoryNodesResponse.CategoryNode> = [];

    return items
      .map((m) => {
        if (m.parents && m.parents.length) {
          parents = [...parents, ...m.parents];
        }
        return m;
      })
      .concat(parents.length ? this.flatArrays(parents) : parents);
  }
  public static flatParents(
    categoryNodes: Array<CategoryNodesResponse.CategoryNode>,
  ): Array<Omit<CategoryNodesResponse.CategoryNode, 'parents'>> {
    return this.flatArrays(categoryNodes).map((item) => {
      const output = Object.assign({}, item);
      delete output.parents;
      return output;
    });
  }
}
