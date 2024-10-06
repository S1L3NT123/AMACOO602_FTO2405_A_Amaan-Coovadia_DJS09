const reviewTotalDisplay = document.querySelector(
  "#reviews"
) as HTMLElement | null;
const userNameDisplay = document.querySelector("#user") as HTMLElement | null;
const returningUserDisplay = document.querySelector(
  "#returning-user"
) as HTMLElement | null;
import { LoyaltyUser } from "./enums";

export function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: LoyaltyUser
) {
  const iconDisplay = LoyaltyUser.GOLD_USER ? "⭐" : "";
  if (reviewTotalDisplay) {
    reviewTotalDisplay.innerHTML = value.toString() + ' Review' + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay
  } else {
    console.error("Review display element not found");
  }
}

export function populateUser(isReturning: boolean, userName: string) {
  if (returningUserDisplay) {
    if (isReturning) {
      returningUserDisplay.innerHTML = "back";
    }
  } else {
    console.error("Returning user display element not found");
  }

  if (userNameDisplay) {
    userNameDisplay.innerHTML = userName;
  } else {
    console.error("Username display element not found");
  }
}

export function showDetails(
  value: boolean | Permissions,
  element: HTMLDivElement,
  price: number
) {
  if (value) {
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + "/night";
    element.appendChild(priceDisplay);
  }
}

export function makeMultiple(value: number): string {
  if (value > 1 || value == 0) {
    return "s";
  } else return "";
}

export function getTopTwoReviews(reviews: {
    name: string;
    stars: number;
    loyalyuser: LoyaltyUser;
    date: string;
}[]) : {
    name: string;
    stars: number;
    loyalyuser: LoyaltyUser;
    date: string;  
}[]  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}