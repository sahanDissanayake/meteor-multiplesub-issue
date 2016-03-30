PostList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    const handle = Meteor.subscribe('posts');

    const handle2 = Meteor.subscribe('singlePost', 'one');

    const data = {};
    if(handle.ready()) {
      data.posts = Posts.find({}, {sort: {_id: 1}}).fetch();
    }
 
    return data;
  },
  getList() {
    return <ul>
      {this.data.posts.map(task => {
        const path = FlowRouter.path('post', {_id: task._id})
        return <li key={task._id}><a href={path}>{task.title}</a></li>
      })}
    </ul>;
  },
  render() {
    return <div>
      This is the post list
      {(this.data.posts)? this.getList() : "loading..."}
    </div>;
  }
});