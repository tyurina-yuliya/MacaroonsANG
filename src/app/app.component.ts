import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";
import {AdvantageType} from "./types/advantage.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  showPresent: boolean = true;
  phoneNumber: string = '375293689868';

  advantages: AdvantageType[] = [
    {
      number: '1',
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов.Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      number: '2',
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      number: '3',
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      number: '4',
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
    },
  ];

  products: ProductType[] = [];

  formValues = {
    productTitle: '',
    name: '',
    phone: '',
  };

  constructor(public productService: ProductService, public cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCard(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
    this.cartService.count++;
    this.productService.addItem(product);
    alert(product.title + ' добавлен в корзину');
  }

  public createOrder() {
    if (!this.formValues.productTitle) {
      alert('Выберете ваш макарун');
      return;
    }
    if (!this.formValues.name) {
      alert('Введите ваше имя');
      return;
    }
    if (!this.formValues.phone) {
      alert('Введите ваш номер');
      return;
    }
    alert('Заказ успешно оформлен');

    this.formValues = {
      productTitle: '',
      name: '',
      phone: '',
    }
  }
}
