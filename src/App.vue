<template>
	<div id="app">
		<header class="header">
			<div class="container">
				<div class="nav">
					<ul class="nav-list">
						<li class="list-item">
							<span class="nav-item-link">Home</span>
						</li>
						<li class="list-item">
							<span class="nav-item-link current-page-link"
								>Products</span
							>
						</li>
					</ul>
					<div class="cart">
						<button
							class="btn cart-btn main-cart-btn"
							@click="showCartContent = !showCartContent"
						>
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									id="Outline"
									viewBox="0 0 24 24"
									width="30"
									height="30"
								>
									<path
										d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z"
									/>
									<circle cx="7" cy="22" r="2" />
									<circle cx="17" cy="22" r="2" />
								</svg>
							</span>
							<span
								v-show="cartContent.length"
								class="products-number"
								>{{ totalProductsNumber }}</span
							>
						</button>
						<div class="cart-content" v-if="showCartContent">
							<div class="cart-content-wrapper">
								<div
									v-if="cartContent.length"
									class="cart-price-amount"
								>
									<span>total amount: </span>
									<span class="total-amount">{{ priceAmount }}</span
									>$
								</div>
								<div
									class="blank-cart-message"
									v-if="!cartContent.length"
								>
									Nothing here yet
								</div>
								<ul class="cart-content-list" v-else>
									<li
										class="cart-item"
										v-for="cartItem in cartContent"
										:key="cartItem.id"
									>
										<div class="item-title">
											{{ cartItem.name }}
											<span class="item-range">{{
												cartItem.itemRange
											}}</span>
										</div>
										<div class="info">
											<div class="gender-price-info">
												<span class="gender">{{
													cartItem.gender
												}}</span>
												<span class="price"
													>{{ cartItem.price }}$</span
												>
											</div>
											<div class="delete-wrapper">
												<button
													class="btn delete-btn"
													@click="deleteFromCart(cartItem)"
												>
													<span>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 24 24"
															width="20"
															height="20"
														>
															<g
																id="_01_align_center"
																data-name="01 align center"
															>
																<path
																	d="M22,4H17V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2ZM9,2h6V4H9Zm9,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V6H18Z"
																/>
																<rect
																	x="9"
																	y="10"
																	width="2"
																	height="8"
																/>
																<rect
																	x="13"
																	y="10"
																	width="2"
																	height="8"
																/>
															</g>
														</svg>
													</span>
												</button>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<main class="main">
			<div class="container">
				<div class="products" id="productList">
					<div
						class="product-item"
						v-for="product in products"
						:key="product.id"
					>
						<div class="title">{{ product.name }}</div>
						<div class="description">{{ product.description }}</div>
						<div class="info">
							<div class="gender-price-info">
								<span class="gender">{{ product.gender }}</span>
								<span class="price">{{ product.price }}$</span>
							</div>
							<div class="product-actions">
								<div class="product-range">
									<span class="total-range">{{
										product.itemRange != 0 ? product.itemRange : ""
									}}</span>
									<button
										class="btn enlarge-range"
										@click="enlargeRange(product)"
									>
										+
									</button>
									<button
										class="btn shrink-range"
										@click="shrinkRange(product)"
									>
										-
									</button>
								</div>
								<div class="add-to-cart-wrapper" id="addBtnWrapper">
									<button
										class="btn add-to-cart-btn"
										@click="addingToCart(product)"
									>
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												id="Outline"
												viewBox="0 0 24 24"
												width="20"
												height="20"
											>
												<circle cx="7" cy="22" r="2" />
												<circle cx="17" cy="22" r="2" />
												<path
													d="M23,3H21V1a1,1,0,0,0-2,0V3H17a1,1,0,0,0,0,2h2V7a1,1,0,0,0,2,0V5h2a1,1,0,0,0,0-2Z"
												/>
												<path
													d="M21.771,9.726a.994.994,0,0,0-1.162.806A3,3,0,0,1,17.657,13H5.418l-.94-8H13a1,1,0,0,0,0-2H4.242L4.2,2.648A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.829-2H17.657a5,5,0,0,0,4.921-4.112A1,1,0,0,0,21.771,9.726Z"
												/>
											</svg>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import productList from "./productList.js";
export default {
	data() {
		return {
			cartContent: [],
			showCartContent: false,
			products: productList,
			totalProductsNumber: 0,
			priceAmount: 0,
		};
	},
	methods: {
		addingToCart(product) {
			let buttonParent = event.target.closest(".add-to-cart-wrapper");
			buttonParent.classList.add("_btn-hover");
			this.totalProductsNumber++;
			this.priceAmount += product.price;
			product.itemRange++;
			return this.cartContent.push(product);
		},
		deleteFromCart(item) {
			let productList = document.querySelector("#productList").childNodes;
			let itemInList = productList[item.id];
			let buttonParent = itemInList.querySelector("#addBtnWrapper");
			buttonParent.classList.remove("_btn-hover");
			let itemInd = this.cartContent.indexOf(item);
			this.totalProductsNumber -= item.itemRange;
			this.priceAmount -= item.price * item.itemRange;
			item.itemRange = 0;
			return this.cartContent.splice(itemInd, 1);
		},
		enlargeRange(product) {
			if (!this.cartContent.includes(product)) {
				let buttonParent = event.target.closest(".product-actions");
				let addToCartBtn = buttonParent.querySelector(
					".add-to-cart-wrapper"
				);
				addToCartBtn.classList.add("_btn-hover");
				this.cartContent.push(product);
			}
			this.totalProductsNumber++;
			this.priceAmount += product.price;
			return product.itemRange++;
		},
		shrinkRange(product) {
			if (
				product.itemRange - 1 !== 0 &&
				product.itemRange !== 0 &&
				this.cartContent.includes(product)
			) {
				this.totalProductsNumber--;
				this.priceAmount -= product.price;
				return product.itemRange--;
			}
		},
	},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");

* {
	box-sizing: border-box;
}

$primary-color: #f5f5f5;
$secondary-color: #4d606e;
$blue: #3fbac2;
$gray: #d3d4d8;

body,
html {
	margin: 0;
	padding: 0;
	font-size: 16px;
	font-family: "Noto Sans", sans-serif;
}

.info {
	width: 100%;
	margin: 5px 0 0 0;
	padding: 5px 0 0 0;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	.gender-price-info {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
	}
	.gender {
		font-size: 0.9em;
		font-weight: bold;
		color: $secondary-color;
	}
	.price {
		font-size: 0.9em;
		color: $blue;
	}
}
.product-item .info {
	border-top: 1px solid $gray;
}
#app {
	display: flex;
	justify-content: ceneter;
	align-items: center;
	flex-direction: column;
	height: 100vh;
}

.container {
	width: 1320px;
	min-height: 100%;
	box-shadow: 0px 0px 74px -50px rgba(34, 60, 80, 0.2);
	margin: 0 auto;
}
.btn {
	padding: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border: none;
	outline: none;
	background-color: transparent;
}
.header {
	width: 100%;
	background-color: $secondary-color;
	.nav-wrapper {
		padding: 0 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.nav {
		display: flex;
		justify-content: space-between;

		.nav-list {
			display: flex;
			list-style: none;
			padding: 0;
			margin: 0;
			background-color: $blue;
			.list-item {
				cursor: pointer;
				font-weight: bold;

				.nav-item-link {
					padding: 20px 20px;
					height: 100%;
					color: $secondary-color;
					transition: all 0.2s ease-in-out;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.current-page-link {
					color: #000;
				}
				&:hover .nav-item-link {
					color: #000;
				}
			}
		}
	}
}

.cart {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: $blue;
	position: relative;

	.blank-cart-message {
		padding: 10px;
		text-align: center;
	}
	.main-cart-btn {
		position: relative;

		.products-number {
			position: absolute;
			right: 0;
			top: 0;
			width: 20px;
			height: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-family: "Poppins", sans-serif;
			font-weight: bold;
			background-color: rgba($gray, 0.6);
			color: #000;
		}
	}

	.cart-content {
		z-index: 10;
		max-height: 600px;
		background-color: #fff;
		border: 1px solid $secondary-color;
		overflow: auto;
		position: absolute;

		.cart-price-amount {
			background-color: #fff;
			border-bottom: 1px solid $secondary-color;
			padding: 10px;

			span {
				text-transform: uppercase;
			}
			.total-amount {
				color: $blue;
			}
		}

		.cart-content-list {
			margin: 0;
			padding: 0;
			list-style: none;
		}
		.item-range {
			color: $blue;
			font-weight: regular;
		}
		.cart-item {
			width: 100%;
			padding: 10px;
			transition: all 0.2s ease-in-out;
			border-bottom: 1px solid $gray;

			&:hover {
				background-color: $primary-color;
			}

			.item-title {
				font-family: "Poppins", sans-serif;
				font-size: 20px;
				text-transform: uppercase;
			}
			.delete-wrapper {
				padding: 5px;
				transition: all 0.2s ease-in-out;

				&:hover {
					background-color: $gray;
				}
				.delete-btn {
					padding: 0;
				}
			}
		}
	}
}

.cart-btn {
	padding: 20px;
}

.main {
	flex: 1 1 auto;
	width: 100%;
	border-bottom: 1px solid $secondary-color;
	background-color: $primary-color;

	.products {
		padding: 50px 0;
		display: flex;
		flex-wrap: wrap;
		gap: 20px;

		.product-item {
			padding: 15px;
			border: 1px solid #000;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			flex-direction: column;

			.title {
				font-family: "Poppins", sans-serif;
				text-transform: uppercase;
				font-size: 2em;
			}
			.description {
				flex: 1 1 auto;
			}
			.product-actions {
				display: flex;
				justify-content: space-between;
				align-content: center;
				.product-range {
					display: flex;
					justify-content: center;
					align-content: center;

					.total-range {
						user-select: none;
						padding: 5px;
						color: $blue;
					}
					.enlarge-range,
					.shrink-range {
						border: 1px solid $secondary-color;
						width: 30px;
						height: 30px;
						background-color: $gray;
						margin: 0 5px 0 0;
						transition: all 0.2s ease-in-out;

						&:hover {
							background-color: $secondary-color;
							color: $primary-color;
						}
					}
				}
			}
			.add-to-cart-wrapper {
				padding: 5px;
				transition: all 0.2s ease-in-out;

				&:hover {
					background-color: $gray;
				}
				.add-to-cart-btn {
					padding: 0;
				}
			}
			.add-to-cart-wrapper._btn-hover {
				opacity: 0.5;
				pointer-events: none;
			}
		}
	}
}
</style>
