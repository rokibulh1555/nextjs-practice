export function getPostData(id) {
    const postOne = {
        title: 'one',
        id: 1,
        date: '7/12/2015'
    }

    const postTwo = {
        title: 'two',
        id: 2,
        date: '7/12/2015'
    }

    if (id == 'one') {
        return postOne;
    } else if (id == 'two') {
        return postTwo;
    }
}

export function getAllPostIds() {
    return [{
        params: {
            id: 'one'
        }
    },
    {
        params: {
            id: 'two'
        }
    }
];
}