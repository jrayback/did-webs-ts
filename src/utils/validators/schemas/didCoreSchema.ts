export const didCoreSchema = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'DID Core-based Document',
  description:
    'A JSON or JSON-LD representation of the DID Core Abstract Data Model as defined in https://w3c.github.io/did-core/',
  type: 'object',
  properties: {
    '@context': {
      anyOf: [
        {
          type: 'string',
        },
        {
          type: 'array',
          items: [
            {
              type: 'string',
            },
          ],
        },
      ],
    },
    id: {
      description: 'A string that conforms to the rules in 3.1 DID Syntax.',
      type: 'string',
    },
    alsoKnownAs: {
      description:
        'A set of strings that conform to the rules of RFC3986 for URIs.',
      anyOf: [
        {
          type: 'string',
        },
        {
          type: 'array',
          items: [
            {
              type: 'string',
            },
          ],
        },
      ],
    },
    controller: {
      description:
        'A string or a set of strings that conform to the rules in 3.1 DID Syntax.',
      anyOf: [
        {
          type: 'string',
        },
        {
          type: 'array',
        },
      ],
    },
    authentication: {
      description:
        'A set of either Verification Method maps that conform to the rules in Verification Method properties) or strings that conform to the rules in 3.2 DID URL Syntax.',
      type: 'array',
      items: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'object',
            properties: {
              id: {
                type: 'string',
              },
              type: {
                type: 'string',
              },
              controller: {
                type: 'string',
              },
              publicKeyMultibase: {
                type: 'string',
              },
            },
          },
        ],
      },
    },
    assertionMethod: {
      description:
        'A set of either Verification Method maps that conform to the rules in Verification Method properties) or strings that conform to the rules in 3.2 DID URL Syntax.',
      type: 'array',
      items: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'object',
            properties: {
              id: {
                type: 'string',
              },
              type: {
                type: 'string',
              },
              controller: {
                type: 'string',
              },
              publicKeyMultibase: {
                type: 'string',
              },
            },
          },
        ],
      },
    },
    capabilityInvocation: {
      description:
        'A set of either Verification Method maps that conform to the rules in Verification Method properties) or strings that conform to the rules in 3.2 DID URL Syntax.',
      type: 'array',
      items: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'object',
            properties: {
              id: {
                type: 'string',
              },
              type: {
                type: 'string',
              },
              controller: {
                type: 'string',
              },
              publicKeyMultibase: {
                type: 'string',
              },
            },
          },
        ],
      },
    },
    capabilityDelegation: {
      description:
        'A set of either Verification Method maps that conform to the rules in Verification Method properties) or strings that conform to the rules in 3.2 DID URL Syntax.',
      type: 'array',
      items: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'object',
            properties: {
              id: {
                type: 'string',
              },
              type: {
                type: 'string',
              },
              controller: {
                type: 'string',
              },
              publicKeyMultibase: {
                type: 'string',
              },
            },
          },
        ],
      },
    },
    keyAgreement: {
      description:
        'A set of either Verification Method maps that conform to the rules in Verification Method properties) or strings that conform to the rules in 3.2 DID URL Syntax.',
      type: 'array',
      items: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'object',
          },
        ],
      },
    },
    service: {
      description:
        'A set of Service Endpoint maps that conform to the rules in Service properties.',
      properties: {
        id: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        serviceEndpoint: {
          $def: '#/$defs/ServiceEndpoint',
        },
      },
    },
    verificationMethod: {
      description:
        'A set of Verification Method maps that conform to the rules in Verification Method properties.',
      type: 'array',
      items: [
        {
          $ref: '#/$defs/VerificationMethod',
        },
      ],
    },
  },
  required: ['id'],
  $defs: {
    ServiceEndpoint: {
      description: 'https://w3c.github.io/did-core/#service-properties',
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        type: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'array',
            },
          ],
        },
        serviceEndpoint: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'object',
            },
            {
              type: 'array',
              items: {
                anyOf: [
                  {
                    type: 'string',
                  },
                  {
                    type: 'object',
                  },
                ],
              },
            },
          ],
        },
      },
    },
    VerificationMethod: {
      description:
        'https://w3c.github.io/did-core/#verification-method-properties',
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        controller: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        publicKeyJwk: {
          type: 'object',
        },
        publicKeyMultibase: {
          type: 'string',
        },
      },
      required: ['id', 'controller', 'type'],
    },
  },
};
