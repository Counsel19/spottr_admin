import { Clock, Sparkles, MoveLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import IconTextButton from "@/components/shared/molecules/IconTextButton";
import routeConstants from "@/constants/routes";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-[70%] mx-auto text-center space-y-8">
        {/* Main Icon */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6">
            <Sparkles className="h-12 w-12 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Something Amazing is Coming
          </h1>
          <p className="text-xl text-gray-600 max-w-lg mx-auto">
            We're working hard to bring you an incredible new feature that will
            transform your experience.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[1.6rem] text-gray-600">
                Our team is putting the finishing touches on this exciting
                feature
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <Sparkles className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Enhanced Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[1.6rem] text-gray-600">
                Get ready for a more intuitive and powerful user experience
              </p>
            </CardContent>
          </Card>

          
        </div>

        {/* Back Link */}
        <div className="pt-8">
          <IconTextButton
            icon={<MoveLeft className="size-8" />}
            cta="Back to Dashboard"
            onClick={() => navigate(routeConstants.dashboard)}
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
