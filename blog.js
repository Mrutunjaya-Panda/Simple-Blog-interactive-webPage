const blogData = [
{
  title: 'First Blog Post',
  date: 'January 1, 2022',
  content: 'This is the content of the first blog post.'
},
{
  title: 'Second Blog Post',
  date: 'February 1, 2022',
  content: 'This is the content of the second blog post.'
},
{
  title: 'Third Blog Post',
  date: 'March 1, 2022',
  content: 'This is the content of the third blog post.'
}
];

blogData.forEach(blog => addBlog(blog)); 

function addBlog(blog){
    const blogList = document.querySelector('.blog-list');
    const newBox = document.createElement('div');
    newBox.classList.add('blog-box');
    blogList.appendChild(newBox);

    const newBlogPost = document.createElement('div');
    newBlogPost.classList.add('blog-post');
    newBox.appendChild(newBlogPost);

    const newBlogHeader = document.createElement('div');
    newBlogHeader.classList.add('blog-header');
    newBlogPost.appendChild(newBlogHeader);

    const newBlogTitle = document.createElement('h2');
    newBlogTitle.classList.add('blog-title');
    newBlogTitle.textContent = blog.title;
    newBlogHeader.appendChild(newBlogTitle);

    const newBlogDate = document.createElement('p');
    newBlogDate.classList.add('blog-date');
    newBlogDate.textContent = blog.date;
    newBlogHeader.appendChild(newBlogDate);

    const newBlogContent = document.createElement('p');
    newBlogContent.classList.add('blog-content');
    newBlogContent.textContent = blog.content;
    newBlogPost.appendChild(newBlogContent);

    const blogButtonsDiv = document.createElement('div');
    blogButtonsDiv.classList.add('blog-buttons');
    newBox.appendChild(blogButtonsDiv);

    //each button to be added on blogButtonsDiv.
    //moveUp
    const moveupBtn = document.createElement('button');
    moveupBtn.classList.add('blog-button','move-up');
    moveupBtn.textContent = "Move Up"
    blogButtonsDiv.appendChild(moveupBtn);
    //eventListener
    moveupBtn.addEventListener("click",() => {
        const current = newBox;
        const prev = current.previousElementSibling;
        if(prev){
            blogList.insertBefore(current,prev);
        }
    });

    //moveDown
    const moveDownBtn = document.createElement('button');
    moveDownBtn.classList.add('blog-button', 'move-down');
    moveDownBtn.textContent = "Move Down";
    blogButtonsDiv.appendChild(moveDownBtn);
    //Add event listerner to movedown button
    moveDownBtn.addEventListener("click", () => { 
        const current = newBox;
        const next = current.nextElementSibling;
        if (next) {
            blogList.insertBefore(next, current);
        }
    });

    //delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('blog-button','delete');
    deleteBtn.textContent = "Delete";
    blogButtonsDiv.appendChild(deleteBtn);

    //eventListener
    deleteBtn.addEventListener("click",() => {
        blogList.removeChild(newBox);
    });
    newBox.appendChild(blogButtonsDiv);
}