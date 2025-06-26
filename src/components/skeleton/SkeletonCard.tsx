import { Box, Card, CardContent, IconButton, Skeleton } from "@mui/material";

export const SkeletonCard = () => {
  return (
    <div style={{width: '1250px', display: "flex", gap: '2rem'}}>
      <Card
        sx={{
          width: 317,
          height: 563,
          borderRadius: 3,
          boxShadow: 3,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box sx={{ position: "relative", height: 150 }}>
          <Skeleton animation="wave" variant="rectangular" width="100%" height="100%" />
          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "#fff",
              zIndex: 1,
            }}
          >
          </IconButton>
        </Box>

        <CardContent>
          <Skeleton animation="wave" width="60%" height={30} />
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Skeleton animation="wave" width="30%" height={20} />
            <Skeleton animation="wave" width="30%" height={20} />
            <Skeleton animation="wave" width="30%" height={20} />
          </Box>
          <Skeleton animation="wave" width="40%" height={25} sx={{ mt: 2 }} />
          <Box mt={1} display="flex" flexDirection="column" gap={1}>
            {["Calories", "Fat", "Sugar", "Carbohydrates", "Protein"].map(
              (label, i) => (
                <Box
                  key={i}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Skeleton animation="wave" width="40%" height={20} />
                  <Skeleton animation="wave" width="20%" height={20} />
                </Box>
              )
            )}
          </Box>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: 317,
          height: 563,
          borderRadius: 3,
          boxShadow: 3,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box sx={{ position: "relative", height: 150 }}>
          <Skeleton animation="wave" variant="rectangular" width="100%" height="100%" />
          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "#fff",
              zIndex: 1,
            }}
          >
          </IconButton>
        </Box>

        <CardContent>
          <Skeleton animation="wave" width="60%" height={30} />
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Skeleton animation="wave" width="30%" height={20} />
            <Skeleton animation="wave" width="30%" height={20} />
            <Skeleton animation="wave" width="30%" height={20} />
          </Box>
          <Skeleton animation="wave" width="40%" height={25} sx={{ mt: 2 }} />
          <Box mt={1} display="flex" flexDirection="column" gap={1}>
            {["Calories", "Fat", "Sugar", "Carbohydrates", "Protein"].map(
              (label, i) => (
                <Box
                  key={i}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Skeleton animation="wave" width="40%" height={20} />
                  <Skeleton animation="wave" width="20%" height={20} />
                </Box>
              )
            )}
          </Box>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: 317,
          height: 563,
          borderRadius: 3,
          boxShadow: 3,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box sx={{ position: "relative", height: 150 }}>
          <Skeleton animation="wave" variant="rectangular" width="100%" height="100%" />
          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "#fff",
              zIndex: 1,
            }}
          >
          </IconButton>
        </Box>

        <CardContent>
          <Skeleton animation="wave" width="60%" height={30} />
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Skeleton animation="wave" width="30%" height={20} />
            <Skeleton animation="wave" width="30%" height={20} />
            <Skeleton animation="wave" width="30%" height={20} />
          </Box>
          <Skeleton animation="wave" width="40%" height={25} sx={{ mt: 2 }} />
          <Box mt={1} display="flex" flexDirection="column" gap={1}>
            {["Calories", "Fat", "Sugar", "Carbohydrates", "Protein"].map(
              (label, i) => (
                <Box
                  key={i}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Skeleton animation="wave" width="40%" height={20} />
                  <Skeleton animation="wave" width="20%" height={20} />
                </Box>
              )
            )}
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
