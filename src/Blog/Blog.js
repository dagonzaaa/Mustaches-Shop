import './css/Blog.css';


import cuttingmustache from '../images/cutting-mustache.jpg'
import inthecountry from '../images/in-the-country.jpg'
import mustachebrothers from '../images/mustache-brothers.jpg'



function Blog() {
  return (
	<div>
		<div id="body">
			<h1><span>blog</span></h1>
			<div>
				<ul>
					<li>
						<a href="blog-single-post.html" class="figure">
							<img src={cuttingmustache} alt=""/>
						</a>
						<div>
							<h3>why i grew a mustache</h3>
							<p>
								Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they’re absolutely free! You can do a lot with them. You can modify them.
							</p>
							<a href="blog-single-post.html" class="more">read this</a>
						</div>
					</li>
					<li>
						<a href="blog-single-post.html" class="figure">
							<img src={inthecountry} alt=""/>
						</a>
						<div>
							<h3>in the country</h3>
							<p>
								Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they’re absolutely free! You can do a lot with them. You can modify them.
							</p>
							<a href="blog-single-post.html" class="more">read this</a>
						</div>
					</li>
					<li>
						<a href="blog-single-post.html" class="figure">
							<img src={mustachebrothers} alt=""/>
						</a>
						<div>
							<h3>the mustache brothers</h3>
							<p>
								Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they’re absolutely free! You can do a lot with them. You can modify them.
							</p>
							<a href="blog-single-post.html" class="more">read this</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
  );
}

export default Blog;
