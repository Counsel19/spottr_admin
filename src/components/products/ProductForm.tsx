import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {  Trash2, Plus, CloudUpload } from "lucide-react";

const ProductForm = () => {
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      name: "Name of document.pdf",
      date: "11 Sep, 2023",
      time: "1.2.24pm",
      size: "13MB"
    }
  ]);

  const [specifications, setSpecifications] = useState([
    { name: "L x W x H", description: "kg" }
  ]);

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const addSpecification = () => {
    setSpecifications([...specifications, { name: "", description: "" }]);
  };

  const removeSpecification = (index: number) => {
    setSpecifications(specifications.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="productName">
                      Product Name <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="productName"
                      placeholder="e.g. Premium Juice Drink"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand">
                      Brand <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="brand"
                      placeholder="e.g. FreshCo"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">
                    Product Description <span className="text-red-500">*</span>
                  </Label>
                  <Textarea 
                    id="description"
                    placeholder="Describe your product features, benefits, and unique selling points."
                    className="min-h-[120px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Media */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  Media <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <CloudUpload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="text-red-500 font-medium">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    PNG, JPG or PDF (Max. 800x400)
                  </p>
                  <div className="text-center">
                    <span className="text-gray-400">OR</span>
                  </div>
                  <Button variant="destructive" className="mt-4">
                    Browse Files
                  </Button>
                </div>

                {/* Uploaded Files */}
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-sm">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.date} • {file.time} • {file.size}</p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => removeFile(index)}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Specifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4 items-end">
                    <div className="space-y-2">
                      <Label>Name</Label>
                      <Input 
                        value={spec.name}
                        placeholder="L x W x H"
                        onChange={(e) => {
                          const newSpecs = [...specifications];
                          newSpecs[index].name = e.target.value;
                          setSpecifications(newSpecs);
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <div className="flex gap-2">
                        <Select value={spec.description}>
                          <SelectTrigger>
                            <SelectValue placeholder="kg" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kg">kg</SelectItem>
                            <SelectItem value="cm">cm</SelectItem>
                            <SelectItem value="inches">inches</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => removeSpecification(index)}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  onClick={addSpecification}
                  className="w-full flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add New Specification
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Category */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Category</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Product category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Tap to select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="food">Food & Beverages</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Subcategory</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="tap to select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Tags (Optional)</Label>
                  <Input placeholder="Use space to enter tags" />
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label>Product Availability</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Enter Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="in-stock">In Stock</SelectItem>
                      <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                      <SelectItem value="limited">Limited Stock</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Variations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Variations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Variant</Label>
                  <Input placeholder="colors_sizes_etc" />
                  <p className="text-xs text-gray-500">Tap Enter to save variant</p>
                </div>
                <div className="space-y-2">
                  <Label>attribute</Label>
                  <Input placeholder="Blue_40_xyz" />
                  <p className="text-xs text-gray-500">
                    Use commas to list options and Tap enter to save
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;