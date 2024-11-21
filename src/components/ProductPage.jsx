


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, CardContent, Typography, Grid, TextField, Button, Box } from '@mui/material';

// const ProductPage = () => {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({ name: '', description: '', price: '' });

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('/api/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/products', formData);
//       setProducts([...products, response.data]);
//       setFormData({ name: '', description: '', price: '' });
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       {/* Form Section */}
//       <Box
//         component="form"
//         onSubmit={handleFormSubmit}
//         sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}
//       >
//         <TextField
//           label="Product Name"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//           sx={{ mb: 2, width: '300px' }}
//           required
//         />
//         <TextField
//           label="Description"
//           name="description"
//           value={formData.description}
//           onChange={handleInputChange}
//           sx={{ mb: 2, width: '300px' }}
//           required
//         />
//         <TextField
//           label="Price"
//           name="price"
//           type="number"
//           value={formData.price}
//           onChange={handleInputChange}
//           sx={{ mb: 2, width: '300px' }}
//           required
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Add Product
//         </Button>
//       </Box>

//       {/* Products List */}
//       {/* <Grid container spacing={3}>
//         {products.map((product) => (
//           <Grid item xs={12} sm={6} md={4} key={product._id}>
//             <Card style={{ height: '100%' }}>
//               <CardContent>
//                 <Typography variant="h5" component="div">
//                   {product.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {product.description}
//                 </Typography>
//                 <Typography variant="h6" component="div" style={{ marginTop: '10px' }}>
//                   ${product.price.toFixed(2)}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid> */}
//       {Array.isArray(products) &&
//   products.map((product) => (
//     <Grid item xs={12} sm={6} md={4} key={product._id}>
//       <Card style={{ height: '100%' }}>
//         <CardContent>
//           <Typography variant="h5" component="div">
//             {product.name}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {product.description}
//           </Typography>
//           <Typography variant="h6" component="div" style={{ marginTop: '10px' }}>
//             ${product.price.toFixed(2)}
//           </Typography>
//         </CardContent>
//       </Card>
//     </Grid>
//   ))}

//     </div>
//   );
// };

// export default ProductPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, CardContent, Typography, Grid, TextField, Button, Box } from '@mui/material';

// const ProductPage = () => {
//   const [products, setProducts] = useState([]);  // Make sure it's initialized as an empty array
//   const [formData, setFormData] = useState({ name: '', description: '', price: '' });
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('/getproducts');
//         // Ensure the response data is an array
//         if (Array.isArray(response.data)) {
//           setProducts(response.data);
//         } else {
//           setError('Invalid data format received.');
//         }
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         setError('Failed to fetch products. Please try again later.');
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

// //   const handleFormSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('/api/products', formData);
// //       setProducts([...products, response.data]);
// //       setFormData({ name: '', description: '', price: '' });
// //       setError('');
// //     } catch (error) {
// //       console.error('Error adding product:', error);
// //       setError('Failed to add product. Please try again.');
// //     }
// //   };
  
// const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Update the API URL to match the backend's URL
//       const response = await axios.post('http://localhost:5000/addproducts', formData);
//       setProducts([...products, response.data]);
//       setFormData({ name: '', description: '', price: '' });
//       setError('');
//     } catch (error) {
//       console.error('Error adding product:', error);
//       setError('Failed to add product. Please try again.');
//     }
//   };
  

//   return (
//     <div style={{ padding: '20px' }}>
//       {/* Form Section */}
//       <Box
//         component="form"
//         onSubmit={handleFormSubmit}
//         sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}
//       >
//         <TextField
//           label="Product Name"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//           sx={{ mb: 2, width: '300px' }}
//           required
//         />
//         <TextField
//           label="Description"
//           name="description"
//           value={formData.description}
//           onChange={handleInputChange}
//           sx={{ mb: 2, width: '300px' }}
//           required
//         />
//         <TextField
//           label="Price"
//           name="price"
//           type="number"
//           value={formData.price}
//           onChange={handleInputChange}
//           sx={{ mb: 2, width: '300px' }}
//           required
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Add Product
//         </Button>
//       </Box>

//       {error && (
//         <Typography variant="body2" color="error" align="center" sx={{ mb: 4 }}>
//           {error}
//         </Typography>
//       )}

//       {/* Products List */}
//       {Array.isArray(products) && products.length > 0 ? (
//         <Grid container spacing={3}>
//           {products.map((product) => (
//             <Grid item xs={12} sm={6} md={4} key={product._id}>
//               <Card style={{ height: '100%' }}>
//                 <CardContent>
//                   <Typography variant="h5" component="div">
//                     {product.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {product.description}
//                   </Typography>
//                   <Typography variant="h6" component="div" style={{ marginTop: '10px' }}>
//                     ${product.price.toFixed(2)}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       ) : (
//         <Typography variant="body2" align="center" sx={{ mt: 4 }}>
//           No products available. Add some products to get started!
//         </Typography>
//       )}
//     </div>
//   );
// };

// export default ProductPage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, TextField, Button, Box } from '@mui/material';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '', price: '' });
  const [error, setError] = useState('');

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getproducts');
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          setError('Invalid data format received.');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products. Please try again later.');
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.name || !formData.description || !formData.price) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/addproducts', formData);
      setProducts([...products, response.data]);
      setFormData({ name: '', description: '', price: '' });
      setError('');
    } catch (error) {
      console.error('Error adding product:', error);
      setError('Failed to add product. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Product Add Form */}
      <Box component="form" onSubmit={handleFormSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
        <TextField
          label="Product Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          sx={{ mb: 2, width: '300px' }}
          required
        />
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          sx={{ mb: 2, width: '300px' }}
          required
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleInputChange}
          sx={{ mb: 2, width: '300px' }}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add Product
        </Button>
      </Box>

      {error && (
        <Typography variant="body2" color="error" align="center" sx={{ mb: 4 }}>
          {error}
        </Typography>
      )}

      {/* Display Products */}
      {Array.isArray(products) && products.length > 0 ? (
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <Card style={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" component="div" style={{ marginTop: '10px' }}>
                    ${product.price.toFixed(2)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          No products available. Add some products to get started!
        </Typography>
      )}
    </div>
  );
};

export default ProductPage;
