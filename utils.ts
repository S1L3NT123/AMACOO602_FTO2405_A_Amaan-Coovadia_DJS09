const reviewTotalDisplay = document.querySelector(
  "#reviews"
) as HTMLElement | null;
const userNameDisplay = document.querySelector("#user") as HTMLElement | null;
const returningUserDisplay = document.querySelector(
  "#returning-user"
) as HTMLElement | null;

export function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: boolean
) {
  const iconDisplay = isLoyalty ? "⭐" : "";
  if (reviewTotalDisplay) {
    reviewTotalDisplay.innerHTML =
      "review total " +
      value.toString() +
      "| last reviewed by " +
      reviewer +
      " " +
      iconDisplay;
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
