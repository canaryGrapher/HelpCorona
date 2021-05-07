import React, { useState } from 'react';
import { Comment, Tooltip, Avatar, message } from 'antd';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Comments = (props) => {
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)

    const [commentLikes, setCommentLikes] = useState(props.likes);
    const [commentDislikes, setCommentDislikes] = useState(props.dislikes);
    const likes = (id) => {
        message.success('Liked');
        setLiked(true)
        props.likeFunction(id)
        const newLikeState = parseInt(parseInt(commentLikes) + 1);
        setCommentLikes(newLikeState);
    };

    const dislikes = (id) => {
        message.error('Disliked');
        setDisliked(true)
        props.dislikeFunction(id)
        const newDislikeState = parseInt(parseInt(commentDislikes) + 1);
        setCommentDislikes(newDislikeState);
    };

    const formatAMPM = (date) => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }

    const icon_for_like = !liked ? <span style={{lineHeight: "30px"}} onClick={() => likes(props.identifier)}><LikeOutlined className="mr-1" /><span className="comment-action">{props.likes}</span></span> : <span style={{lineHeight: "30px"}}><LikeFilled className="my-auto mr-1 text-primary" /><span className="comment-action my-auto">{commentLikes}</span></span>
    const icon_for_dislike = !disliked ? <span style={{lineHeight: "30px"}} onClick={() => dislikes(props.identifier)}><DislikeOutlined className="mr-1" /><span className="comment-action">{props.dislikes}</span></span> : <span style={{lineHeight: "30px"}}><DislikeFilled className="my-auto mr-1 text-primary" /><span className="comment-action my-auto">{commentDislikes}</span></span>

    const actions = [
        <Tooltip key="comment-basic-like" className="text-white" title="Useful">
            {icon_for_like}
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" className="text-white" title="Not useful">
            {icon_for_dislike}
        </Tooltip>,
    ];
    const newDate = new Date(props.time)
    return (
        <Comment
            className="w-100"
            actions={actions}
            avatar={
                <Avatar
                    src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"
                    alt="Anonymous user"
                />
            }
            content={
                <p>{props.content}</p>
            }
            datetime={
                <mark className="text-white" style={{backgroundColor: "#8c0032"}}>{month[newDate.getMonth()] + " " + newDate.getDate() + ", " + newDate.getFullYear() + " | " + formatAMPM(newDate)}</mark>
            }
        />
    );
};

export default Comments