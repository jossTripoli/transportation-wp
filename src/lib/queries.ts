export const HOME_TRANSPORTATION_QUERY = `
  query HomeTransportationSection {
    page(id: "home", idType: URI) {
      title
      homeHeroSection {
        primaryCta {
          label: title
          href: url
          target
        }
        secondaryCta {
          label: title
          href: url
          target
        }
        categories {
          label
          headingTop: headingtop
          headingAccent: headingaccent
          headingBottom
          intro
          icon {
            node {
              sourceUrl
              altText
            }
          }
          subcategories {
            label
            heading
            body
            icon {
              node {
                sourceUrl
                altText
              }
            }
            image {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  }
`;