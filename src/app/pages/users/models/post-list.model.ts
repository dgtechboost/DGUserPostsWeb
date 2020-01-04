export class PostListModel {
    id: number;
    userId: number;
    title: string;
    body: string;
    constructor(_params?: any) {
        if (!_params) _params = {};
        this.id = _params.id;
        this.userId = _params.userId;
        this.title = _params.title;
        this.body = _params.body;
    }
}