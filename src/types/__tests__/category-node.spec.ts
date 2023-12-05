import { describe, expect, it } from 'vitest';
import { CategoryNodeHelper, CategoryNodesResponse } from '../category-nodes';

describe('Category Node Helper', () => {
  it('Flattens nested array', () => {
    const given = [
      {
        nodeId: 1,
        parents: [
          {
            nodeId: 2,
            parents: [
              {
                nodeId: 3,
                parents: [
                  {
                    nodeId: 4,
                  },
                ],
              },
            ],
          },
        ],
      },
    ];

    const expected = [{ nodeId: 1 }, { nodeId: 2 }, { nodeId: 3 }, { nodeId: 4 }];

    expect(CategoryNodeHelper.flatParents(given as unknown as Array<CategoryNodesResponse.CategoryNode>)).toEqual(
      expected,
    );
  });
});
