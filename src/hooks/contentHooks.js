import {useStaticQuery,graphql} from "gatsby";


export const useFirstSection = () => {  
	
	const data = useStaticQuery(graphql`
		query{
			 allContentfulFirstSection{
			    nodes{
			      title
			      description		     
		  		}
  			}
  			contentfulFirstSectionHeader{
			    firstSectionHeaderText
			  }
		} 
	`)

	const queryData = {
		headerText: data.contentfulFirstSectionHeader.firstSectionHeaderText,
		firstSectionItems:  data.allContentfulFirstSection.nodes
	}

	return queryData
}
