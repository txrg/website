import React, {useState} from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default function Whammy() {

  const data = useStaticQuery(graphql`
    query WhammyQuery {
      allContentfulWhammy(sort: [{year: DESC}, {category: ASC}, {award: ASC}, {recipient: {name: ASC}}]) {
        group(field: { year: SELECT }) {
          fieldValue
          edges {
            node {
              category
              award
              recipient {
                name
                recipientPath: gatsbyPath(filePath: "/members/{ContentfulMember.name}")
              }
              recipientCustom
            }
          }
        }
      }
    }
  `);

    const whammies = data.allContentfulWhammy.group.slice(0).reverse();
    const [whammyYear, setWhammyYear] = useState(whammies[0].fieldValue);

    return <>
        <div className="whammy-filter-selector">
          <select defaultValue={whammyYear} onChange={(e) => setWhammyYear(e.target.value)}>
            {whammies.map(({ fieldValue: year }) => <option key={year} value={year}>{year}</option>)}
          </select>
        </div>
        <div className="whammy">
            <div className="whammy-filter-year">{whammies.map(({fieldValue: year}) => (
                <div
                    className={whammyYear === year ? "whammy-filter-selected" : ""}
                    onClick={() => setWhammyYear(year)}
                >{year}</div>
            ))}</div>
            <div>{whammies.filter(({fieldValue: year}) => year === whammyYear).map(({fieldValue: year, edges}) => {
                const categories = edges.reduce((awards, {node}) => {
                    if (awards[node.category]) {
                        return {...awards, [node.category]: [...awards[node.category], node]};
                    }
                    return {...awards, [node.category]: [node]};
                }, {});

                return (
                    <div key={year}>
                        <h2>{year}</h2>
                        <div>
                            {Object.entries(categories).map(([category, awards]) => (
                                <div key={`${year}-${category}`} className="whammy-category">
                                    <h3>{category}</h3>
                                    {awards.map(({award, recipient, recipientCustom}) => (
                                        <div key={`${year}-${category}-${award}-${recipient?.name ? recipient.name : recipientCustom}`}>
                                            <div className="whammy-award">{award}</div>
                                            <div className="whammy-recipient">{recipient ? <Link to={recipient.recipientPath}>{recipient.name}</Link> : <strong>{recipientCustom}</strong>}</div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}</div>
        </div></>
}