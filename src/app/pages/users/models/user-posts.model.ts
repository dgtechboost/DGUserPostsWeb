export class UserPostsModel{
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address:AddressModel;
    company:CompanyModel;
    posts: PostListModel[];

    constructor(_params?: any) {
        if (!_params) _params = {};
        this.id = _params.id;
        this.name = _params.name;
        this.username = _params.username;
        this.email = _params.email;
        this.phone = _params.phone;
        this.website = _params.website;
        this.address = new AddressModel(_params.address);
        this.company = new CompanyModel(_params.company);
        this.posts = this.populatePosts(_params.posts);
    }

    populatePosts(_posts?: any): PostListModel[] {
        if (!_posts) _posts = [];
        var postList:PostListModel[] = [];
        
         _posts.forEach(element => {
            postList.push(new PostListModel(element));
        });

        return postList;
    }
}

class AddressModel{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo:GeoModel
    constructor(_params?: any) {
        if (!_params) _params = {};
        this.street = _params.street;
        this.suite = _params.suite;
        this.city = _params.city;
        this.zipcode = _params.zipcode;
        this.geo = new GeoModel(_params.geo);
    }
}

class GeoModel{
    latitude: string;
    longitude: string;
    constructor(_params?: any) {
        if (!_params) _params = {};
        this.latitude = _params.latitude;
        this.longitude = _params.longitude;
    }
}

class CompanyModel{
    name: string;
    catchPhrase: string;
    bs: string;
    constructor(_params?: any) {
        if (!_params) _params = {};
        this.name = _params.name;
        this.catchPhrase = _params.catchPhrase;
        this.bs = _params.bs;
    }
}

class PostListModel{
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