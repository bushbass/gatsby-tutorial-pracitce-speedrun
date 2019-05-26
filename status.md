Install Gatsby cli
run - Gatsby new  project name + git repo
Cd into folder -> Gatsby develop to run site
Pages folder in src is where you create new pages
Modify index.js to show how it works
Add a few pages - about, contact, blog
Linking between pages
	<a> works but causes refersh
	use this for external links
	so import and use Link from Gatsby for internal links
Add some links to external sites and some internal

Create header with nav component and footer
	create components folder
	this is where non-page components live
	import and place it on all pages

With a layout component, we won’t have to manually add the header and footer to each page
	layout wraps header, footer, and in-between props.children
	no longer need header and footer imports except in layout
This is the basics of navigating a Gatsby site!

Styling
	Create styles folder in src
	create index.css and import it to layout
	use all one color as an example
	use Gatsby website to install Gatsby-plugin-sass, node-sass
		*Be sure to change .css to .scss and import links
	not totally needed but then you can use sass variables, mixing etc
	*need to restart Gatsby server when you change Gatsby-config file
————————————

Css modules
	used in official docs, seems to be the way to go but you can use other methods
	using a .scss file still applies to the whole page unless you make it *.module.scss
	you could use something like a class like .header-link instead of .link but then if you want to do something on a link in another component, you will still be overriding.  
SO, in modules, styles are not globally scoped only apply to the component
Css modules export an object of your styles so you can get the default export which is the whole object
Then your className needs to be in {} like {headerStyle.link}
You could show in the inspector tool how the modules give a unique name

Make a sticky footer 
	separate footer to outside of div

Watch out for in .scss something like .nav-list is referred to as .navList camelcase inside of component
Style nav so it’s a list with a gray color, add hover state for darker color and activeClassName for active page
	

Adding graphQl
to config - > add siteMetadata object
___graphql to get to graphiql
show docs to get query we want
use query in header component
-import from gatsby 'graphql,useStaticQuery'
-const data - HOC useStaticQuery(graphql`query`)
-use data in page in curyl braces

can use graphql playground instead of grapHiql






to config - > add siteMetadata object
___graphql to get to graphiql
show docs to get query we want
use query in header component
-import from gatsby 'graphql,useStaticQuery'
-const data - HOC useStaticQuery(graphql`query`)
-use data in page in curyl braces

can use graphql playground instead of grapHiql
---------------
source from filesystem
-create posts(or whatever name) folder
-create some md files
-install source-gatsby-filesystem plugin and restart (use gatsby site)
   -this lets us access the files we just made
-playground now has files and allfiles
-add plugin transformer-remark
   - this transforms md to html
-playground now has markdown-remark and allmarkdown-remark
-create query as above but for this data
-on blog page, query then map through data to make list of posts/dates/etc




