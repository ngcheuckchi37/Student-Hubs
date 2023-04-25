// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract SocialMediaContract {
    struct Post {
        uint id;
        address author;
        string content;
    }

    mapping(uint => Post) public posts;
    uint public postCount;

    function createPost(string memory _content) public {
        postCount++;
        posts[postCount] = Post(postCount, msg.sender, _content);
    }
}
