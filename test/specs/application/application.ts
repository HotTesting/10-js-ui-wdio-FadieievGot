import { ConfirmationPage } from "./pages/checkout/confirmation.page";
import { CheckoutPage } from "./pages/checkout/index";
import { HomePage } from "./pages/home/home.page";
import { ProductCategoryPage } from "./pages/productCategory.page";
import { RegistrationPage } from "../application/pages/registration.page";
import { ShoppingCartPage } from "../application/pages/shoppingCart.page";
import { ProductComparisonPage } from "../application/pages/productComparison.page";
import{ NavigationHelper } from "../application/pages/navigationHelper";

export class App {
    home: HomePage;
    productCategory: ProductCategoryPage;
    checkout: CheckoutPage;
    confirmation: ConfirmationPage;
    registration: RegistrationPage;
    shoppingCart: ShoppingCartPage;
    productComparison: ProductComparisonPage;
    navigationHelper: NavigationHelper;

    constructor() {
        this.home = new HomePage();
        this.productCategory = new ProductCategoryPage();
        this.checkout = new CheckoutPage();
        this.confirmation = new ConfirmationPage();
        this.registration = new RegistrationPage();
        this.shoppingCart = new ShoppingCartPage();
        this.productComparison = new ProductComparisonPage();
        this.navigationHelper = new NavigationHelper();
    }
}