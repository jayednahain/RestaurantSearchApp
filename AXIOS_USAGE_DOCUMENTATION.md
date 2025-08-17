# Axios Usage Documentation - RestaurantSearchApp

## Table of Contents
1. [Project Overview](#project-overview)
2. [Axios Setup & Configuration](#axios-setup--configuration)
3. [Service Layer Architecture](#service-layer-architecture)
4. [API Functions](#api-functions)
5. [Error Handling](#error-handling)
6. [UI Integration](#ui-integration)
7. [Complete Data Flow](#complete-data-flow)
8. [Usage Examples](#usage-examples)
9. [Best Practices Implemented](#best-practices-implemented)

## Project Overview

RestaurantSearchApp is a React Native application that uses Axios for HTTP requests to fetch product data from the DummyJSON API. The application implements a robust service layer architecture with centralized error handling, interceptors, and modular API functions.

### Key Features:
- Product search functionality
- Product detail views
- Category-based filtering
- Centralized API management
- Comprehensive error handling

## Axios Setup & Configuration

### Main Axios Instance (`App/Service/apiClients.js`)

```javascript
import axios from 'axios';
import { attachInterceptors } from './apiInterceptors';

export const dummyJsonClient = axios.create({
    baseURL: 'https://dummyjson.com/',
});

attachInterceptors(dummyJsonClient, 'DummyJSON');
```

**Purpose**: This is the primary axios client used throughout the application for API calls.

### Legacy Service (`App/Service/DummyJsonService.js`)

```javascript
import axios from "axios";

const DummyJsonService = axios.create({
    baseURL: 'https://dummyjson.com/',
});

const handleResponseSuccess = (response) => {
    return response;
};

const handleResponseError = (error) => {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            const statusCode = error.response.status;
            let errorMessage = `API Error (Status ${statusCode})`;
            
            if (statusCode === 404) {
                errorMessage = 'Resource not found.';
            } else if (statusCode >= 500) {
                errorMessage = 'Server error. Please try again later.';
            }
            error.message = errorMessage;
        } else if (error.request) {
            error.message = 'Network error. Please check your internet connection.';
        } else {
            error.message = 'An unexpected error occurred.';
        }
    }
    return Promise.reject(error);
};

DummyJsonService.interceptors.response.use(
    handleResponseSuccess,
    handleResponseError
);

export default DummyJsonService;
```

**Purpose**: Legacy axios service with built-in error handling (still referenced in some components).

### Multiple Services Configuration (`App/Service/apiServices.js`)

```javascript
import axios from 'axios';
import { attachInterceptors } from './apiInterceptors';

export const dummyJsonService = axios.create({
    baseURL: 'https://dummyjson.com/',
});

export const otherApiService = axios.create({
    baseURL: 'https://api.otherservice.com/',
});

export const anotherApiService = axios.create({
    baseURL: 'https://api.anotherservice.net/',
});

// Attach interceptors to each service
attachInterceptors(dummyJsonService, 'DummyJSON');
attachInterceptors(otherApiService, 'Other API');
attachInterceptors(anotherApiService, 'Another API');
```

**Purpose**: Demonstrates how to configure multiple API services for different backends.

## Service Layer Architecture

### 1. Interceptors (`App/Service/apiInterceptors.js`)

```javascript
import { handleApiError } from "./apiErrorUtils";

export const attachInterceptors = (service, serviceName) => {
    service.interceptors.response.use(
        (response) => response,
        (error) => handleApiError(error, serviceName)
    );
};
```

**Purpose**: Provides reusable interceptor logic that can be attached to any axios instance.

### 2. Error Handling (`App/Service/apiErrorUtils.js`)

```javascript
import axios from 'axios';

export const handleApiError = (error, serviceName = 'API') => {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            const statusCode = error.response.status;
            let errorMessage = `${serviceName} Error (Status ${statusCode})`;

            if (statusCode === 404) {
                errorMessage = `${serviceName} Resource not found.`;
            } else if (statusCode >= 500) {
                errorMessage = `${serviceName} Server error. Please try again later.`;
            } else if (statusCode === 401) {
                errorMessage = `${serviceName} Unauthorized. Please log in.`;
            }

            error.message = errorMessage;
        } else if (error.request) {
            error.message = `${serviceName} Network error. Please check your internet connection.`;
        } else {
            error.message = `${serviceName} Unexpected error.`;
        }
    }
    return Promise.reject(error);
};
```

**Features**:
- Centralized error handling logic
- Service-specific error messages
- Different error types handling (response, request, other)
- Status code-based error categorization

### 3. Handler Functions

#### Success Handler (`App/Service/handlerSuccess.js`)
```javascript
export const createSuccessHandler = () => {
    return (response) => response;
};
```

#### Error Handler (`App/Service/handlerError.js`)
```javascript
import { handleApiError } from "./apiErrorUtils";

export const createErrorHandler = (serviceName) => {
    return (error) => handleApiError(error, serviceName);
};
```

## API Functions

### Product API Functions (`App/Service/lib/product.js`)

```javascript
import { dummyJsonClient } from "../apiClients";

export function getAllProduct(searchKeyWord) {
    return dummyJsonClient.get('products/search', { 
        params: { q: searchKeyWord } 
    });
}

export function getAllProductCategory() {
    return dummyJsonClient.get('products/category-list', {});
}

export function getProductDetail(id) {
    return dummyJsonClient.get(`products/${id}`, {});
}
```

**Purpose**: Abstraction layer that provides clean, reusable API functions for product-related operations.

### API Endpoints Used:
1. **GET /products/search** - Search products with query parameter
2. **GET /products/category-list** - Get all product categories  
3. **GET /products/{id}** - Get specific product details

## Error Handling

### Error Types Handled:
1. **Response Errors** (4xx, 5xx status codes)
   - 404: Resource not found
   - 401: Unauthorized access
   - 500+: Server errors

2. **Request Errors** (Network issues)
   - Connection timeout
   - No internet connection
   - DNS resolution failures

3. **Other Errors** (Configuration, unexpected issues)
   - Invalid request setup
   - Axios configuration errors

### Error Flow:
```
API Call → Error Occurs → Interceptor Catches → handleApiError() → 
Formatted Error Message → Promise.reject() → Component Catch Block → 
UI Error Display
```

## UI Integration

### 1. Search View (`App/Views/SearchView.js`)

#### Imports:
```javascript
import DummyJsonService from '../Service/DummyJsonService';
import { dummyJsonService } from '../Service/apiServices';
import { getAllProduct, getAllProductCategory } from '../Service/lib/product';
```

#### State Management:
```javascript
const [searchKeyWord, setSearchKeyWord] = useState("");
const [responseList, setResponseList] = useState([]);
const [responseCategoryList, setCategoryList] = useState([]);
const [errorMessage, setErrorMessage] = useState("");
const [isLoading, setIsLoading] = useState(true);
const [hasError, setHasErrorOnRequest] = useState(false);
```

#### API Integration:
```javascript
const getAllProductAndProductCategory = async () => {
    setIsLoading(true);
    setHasErrorOnRequest(false);

    const promiseProduct = getAllProduct(searchKeyWord);
    const promiseCategory = getAllProductCategory();

    await Promise.all([promiseProduct, promiseCategory])
        .then(([productResponse, categoryResponse]) => {
            setResponseList(productResponse.data.products);
            setCategoryList(categoryResponse.data);
        }).catch((error) => {
            setErrorMessage(error.message);
            setHasErrorOnRequest(true);
            console.log("error!", error);
        })
        .finally(() => {
            setIsLoading(false);
        });
}
```

### 2. Search Details View (`App/Views/SearchDetailsView.js`)

#### Imports:
```javascript
import DummyJsonService from '../Service/DummyJsonService';
import { getProductDetail } from '../Service/lib/product';
```

#### State Management:
```javascript
const [product, setResponseObj] = useState({});
const [errorMessage, setErrorMessage] = useState("");
const [loading, setLoading] = useState(true);
```

#### API Integration:
```javascript
const getProductDetails = async () => {
    try {
        setLoading(true);
        const response = await getProductDetail(id);
        setResponseObj(response.data);
    } catch (error) {
        setErrorMessage(`${error}`);
    } finally {
        setLoading(false);
    }
}
```

## Complete Data Flow

### 1. Product Search Flow:
```
User Input → SearchView Component → getAllProduct() → 
dummyJsonClient.get() → DummyJSON API → Response → 
Interceptor Processing → Component State Update → 
UI Re-render → Search Results Display
```

### 2. Product Details Flow:
```
User Clicks Product → Navigation with ID → SearchDetailsView → 
getProductDetail(id) → dummyJsonClient.get() → DummyJSON API → 
Response → Interceptor Processing → Component State Update → 
UI Re-render → Product Details Display
```

### 3. Error Flow:
```
API Call → Error Response → Interceptor Catches Error → 
handleApiError() → Formatted Error Message → Component Catch → 
Error State Update → Error UI Display
```

## Usage Examples

### Example 1: Simple Product Search

```javascript
// API Function Call
const searchProducts = async (query) => {
    try {
        const response = await getAllProduct(query);
        console.log('Products:', response.data.products);
        return response.data.products;
    } catch (error) {
        console.error('Search failed:', error.message);
        throw error;
    }
};

// Usage in Component
useEffect(() => {
    if (searchKeyWord.length >= 3) {
        searchProducts(searchKeyWord)
            .then(products => setResponseList(products))
            .catch(error => setErrorMessage(error.message));
    }
}, [searchKeyWord]);
```

### Example 2: Concurrent API Calls

```javascript
// Fetch products and categories simultaneously
const loadData = async () => {
    try {
        setLoading(true);
        
        const [productsRes, categoriesRes] = await Promise.all([
            getAllProduct(searchQuery),
            getAllProductCategory()
        ]);
        
        setProducts(productsRes.data.products);
        setCategories(categoriesRes.data);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
};
```

### Example 3: Product Detail Fetch

```javascript
// Get specific product details
const loadProductDetails = async (productId) => {
    try {
        setLoading(true);
        const response = await getProductDetail(productId);
        setProduct(response.data);
    } catch (error) {
        if (error.message.includes('404')) {
            setError('Product not found');
        } else {
            setError('Failed to load product details');
        }
    } finally {
        setLoading(false);
    }
};
```

## Best Practices Implemented

### 1. **Separation of Concerns**
- API logic separated from UI components
- Centralized error handling
- Modular service architecture

### 2. **Error Handling**
- Comprehensive error categorization
- User-friendly error messages
- Graceful error recovery

### 3. **Code Reusability**
- Reusable axios interceptors
- Abstract API functions
- Shared error handling utilities

### 4. **State Management**
- Loading states for better UX
- Error states for user feedback
- Proper state cleanup

### 5. **Performance Optimization**
- Concurrent API calls with Promise.all()
- Conditional API calls based on user input
- Proper cleanup in useEffect

### 6. **Maintainability**
- Clear naming conventions
- Consistent file structure
- Documented code patterns

## API Response Examples

### Product Search Response:
```json
{
  "products": [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile...",
      "price": 549,
      "category": "smartphones",
      "thumbnail": "https://...",
      "images": ["https://..."]
    }
  ],
  "total": 100,
  "skip": 0,
  "limit": 30
}
```

### Category List Response:
```json
[
  "beauty",
  "fragrances", 
  "furniture",
  "groceries",
  "home-decoration"
]
```

### Product Detail Response:
```json
{
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile...",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://...",
  "images": ["https://..."],
  "dimensions": {
    "width": 7.44,
    "height": 5.81,
    "depth": 0.77
  },
  "warrantyInformation": "1 year warranty",
  "shippingInformation": "Ships overnight",
  "availabilityStatus": "In Stock",
  "reviews": [
    {
      "rating": 2,
      "comment": "Very unhappy with my purchase!",
      "date": "2024-05-23T08:56:21.618Z",
      "reviewerName": "John Doe"
    }
  ],
  "returnPolicy": "30 days return policy",
  "tags": ["smartphones", "apple", "ios"]
}
```

This documentation provides a comprehensive overview of how Axios is implemented and used throughout the RestaurantSearchApp, from initial setup to final UI display.